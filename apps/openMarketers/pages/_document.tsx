import Document, { Html, Head, Main, NextScript } from 'next/document';

function dedupe<T extends { file: any }>(bundles: any): any {
  const files = new Set<string>();
  const kept: T[] = [];

  for (const bundle of bundles) {
    if (files.has(bundle.file)) continue;
    files.add(bundle.file);
    kept.push(bundle);
  }
  return kept;
}

type DocumentFiles = {
  sharedFiles: readonly string[];
  pageFiles: readonly string[];
  allFiles: readonly string[];
};

class DeferNextScript extends NextScript {
  getDynamicChunks(files: DocumentFiles) {
    const {
      dynamicImports,
      assetPrefix,
      isDevelopment,
      devOnlyCacheBusterQueryString,
    } = this.context;

    return dedupe(dynamicImports).map((bundle: any) => {
      if (!bundle.file.endsWith('.js') || files.allFiles.includes(bundle.file))
        return null;

      return (
        <script
          defer={!isDevelopment}
          key={bundle.file}
          src={`${assetPrefix}/_next/${encodeURI(
            bundle.file
          )}${devOnlyCacheBusterQueryString}`}
          nonce={this.props.nonce}
          crossOrigin={
            this.props.crossOrigin || process.env.__NEXT_CROSS_ORIGIN
          }
        />
      );
    });
  }
  getScripts(files: DocumentFiles) {
    const {
      assetPrefix,
      buildManifest,
      isDevelopment,
      devOnlyCacheBusterQueryString,
    } = this.context;

    const normalScripts = files.allFiles.filter((file) => file.endsWith('.js'));
    const lowPriorityScripts = buildManifest.lowPriorityFiles?.filter((file) =>
      file.endsWith('.js')
    );

    return [...normalScripts, ...lowPriorityScripts].map((file) => {
      return (
        <script
          key={file}
          src={`${assetPrefix}/_next/${encodeURI(
            file
          )}${devOnlyCacheBusterQueryString}`}
          nonce={this.props.nonce}
          defer={!isDevelopment}
          crossOrigin={
            this.props.crossOrigin || process.env.__NEXT_CROSS_ORIGIN
          }
        />
      );
    });
  }
}

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="es">
        <Head>
          <meta name="p:domain_verify" content="3218bcf3d6762a88558390d021264304" />
          <meta name="facebook-domain-verification" content="4tbx8ihyyyx7bdd5pl2i7kli153qj8" />
          <script
            data-partytown-config
            dangerouslySetInnerHTML={{
              __html: `
                partytown = {
                  lib: "/_next/static/~partytown/",
                  debug: true
                };
              `,
            }}
          />
        </Head>

        <body>
          <noscript
            dangerouslySetInnerHTML={{
              __html: `
                <iframe
                  src="https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}"
                  height="0"
                  width="0"
                  style="display: none; visibility: hidden"
                ></iframe>
              `,
            }}
          />

          <Main />
          <DeferNextScript />
        </body>
      </Html>
    );
  }
}
