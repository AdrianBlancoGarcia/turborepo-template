import Button from '../../Button';
import Drawer from '../../Drawer';

import { ICategoria, ITecnologia, REGIONENUM, REGIONVIEWENUM, EXPERIENCIAENUM } from '../../../shared/models';
import ToggleRemotoFiltros from '../../ToggleRemotoFiltros';

import Icon14IconProps from '../../plasmic/job_run/icons/PlasmicIcon__Icon14';
import ClosesvgIcon from '../../plasmic/job_run/icons/PlasmicIcon__Closesvg';

import styles from '../../../styles/Drawer.module.css';
import selectStyle from '../../../styles/Select.module.css';

type DrawerFilterProps = {
  openDrawerFilter: boolean;
  numOfertasFiltradas: number;
  setOpenDrawerFilter: (boolean: boolean) => void;
  categorias: ICategoria[];
  tecnologias: ITecnologia[];
  filtros: any;
  setFiltros: ({}) => void;
};

function DrawerFiltros({
  filtros,
  setFiltros,
  categorias,
  tecnologias,
  openDrawerFilter,
  numOfertasFiltradas,
  setOpenDrawerFilter,
}: DrawerFilterProps) {
  return (
    <Drawer
      className={
        styles.drawer_container +
        ' ' +
        (openDrawerFilter
          ? styles.drawer_container__show + ' ' + styles.drawer_animation
          : styles.drawer_container__hidden + ' ' + styles.drawer_animation)
      }
      element="filtros"
      ctaFiltros={
        !(numOfertasFiltradas <= 0) ? (
          <Button
            color="purple"
            size="strech"
            onClick={() => setOpenDrawerFilter(false)}
            label={`Mostrar ${numOfertasFiltradas} resultados`}
          />
        ) : (
          <Button size="strech" color="disabled" label="No hay ofertas" onClick={() => setOpenDrawerFilter(false)} />
        )
      }
      ctaBorrar={
        <Button
          color="whiteText"
          size="linkOnly"
          onClick={() => setFiltros({})}
          label={<span style={{ fontSize: '14px' }}>Borrar</span>}
        />
      }
      filtrosofertas={
        <>
          <FiltroOferta
            dataCy="filtro_region"
            valueJSON="region"
            labelJSON="regionLabel"
            filtros={filtros}
            setFiltros={setFiltros}
            filtro={filtros?.region}
            options={[
              { label: REGIONVIEWENUM.LATAM, value: REGIONENUM.LATAM },
              { label: REGIONVIEWENUM.EUROPA, value: REGIONENUM.EUROPA },
            ]}
          />

          <FiltroOferta
            dataCy="filtro_especialidad"
            valueJSON="puesto"
            labelJSON="puestoLabel"
            slugJSON="tecnologiaSlug"
            filtros={filtros}
            setFiltros={setFiltros}
            filtro={filtros?.puesto}
            options={categorias
              ?.filter((filtro) => filtro?.slug !== 'remoto')
              ?.map((c) => ({ label: c?.nombre || '-', value: c?.id, slug: c?.slug }))}
          />

          <FiltroOferta
            dataCy="filtro_experiencia"
            valueJSON="experiencia"
            labelJSON="experienciaLabel"
            filtros={filtros}
            setFiltros={setFiltros}
            filtro={filtros?.experiencia}
            options={[
              { label: 'Sin experiencia', value: EXPERIENCIAENUM.JUNIOR },
              { label: 'Junior', value: EXPERIENCIAENUM.SEMISENIOR },
              { label: 'Senior', value: EXPERIENCIAENUM.SENIOR },
            ]}
          />

          <FiltroOferta
            dataCy="filtro_tecnologia"
            valueJSON="tecnologia"
            labelJSON="tecnologiaLabel"
            slugJSON="tecnologiaSlug"
            filtros={filtros}
            setFiltros={setFiltros}
            filtro={filtros?.tecnologia}
            options={tecnologias?.map((t) => ({ label: t?.nombre || '-', value: t?.id, slug: t?.slug }))}
          />
        </>
      }
      drawerButton={<Button iconOnly="white" onClick={() => setOpenDrawerFilter(false)} />}
      filtroremoto={
        <ToggleRemotoFiltros isChecked={filtros?.remote} onClick={() => setFiltros({ ...filtros, remote: !filtros?.remote })} />
      }
    />
  );
}

export default DrawerFiltros;

const FiltroOferta = ({
  options = [],
  setFiltros,
  filtro,
  valueJSON,
  labelJSON,
  slugJSON,
  filtros,
  dataCy,
}: {
  options: { value: any; label: string; slug?: string }[];
  setFiltros: (filtro: any) => void;
  filtro: any;
  valueJSON: string;
  labelJSON: string;
  slugJSON?: string;
  filtros: any;
  dataCy: string;
}) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%' }}>
      <div className={selectStyle?.div1}>
        <div className={selectStyle?.div2}>
          {!filtros?.[valueJSON] ? (
            <Icon14IconProps className={selectStyle.iconSelect} />
          ) : (
            <ClosesvgIcon
              className={selectStyle.iconSelectBorrar}
              onClick={() =>
                slugJSON
                  ? setFiltros({ ...filtros, [valueJSON]: undefined, [labelJSON]: undefined, [slugJSON]: undefined })
                  : setFiltros({ ...filtros, [valueJSON]: undefined, [labelJSON]: undefined })
              }
            />
          )}
        </div>
      </div>

      <select
        data-cy={dataCy}
        value={filtro}
        defaultValue={filtro || 'unset'}
        className={selectStyle.selectContainer}
        style={filtro ? { color: '#B07BFF' } : {}}
        onChange={(e) =>
          slugJSON
            ? setFiltros({
                ...filtros,
                [valueJSON]: e.target.value,
                [labelJSON]: document.getElementById(`${e.target.value}`)?.innerHTML,
                [slugJSON]: options?.find((option: any) => +option?.value === +e.target.value)?.slug,
              })
            : setFiltros({
                ...filtros,
                [valueJSON]: e.target.value,
                [labelJSON]: document.getElementById(`${e.target.value}`)?.innerHTML,
              })
        }
      >
        <option hidden selected value="unset">
          {valueJSON[0].toUpperCase() + valueJSON?.replace(valueJSON[0], '')}
        </option>

        {options.map(({ label, value, slug }, i) => (
          <option
            data-cy={`${value}`}
            style={{ color: 'white', backgroundColor: '#1A1A1A', border: 'none' }}
            id={value}
            key={i}
            value={value}
          >
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};
