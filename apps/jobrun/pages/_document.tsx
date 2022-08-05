import Script from 'next/script';
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
  allFiles: readonly string[];
  pageFiles: readonly string[];
  sharedFiles: readonly string[];
};

class DeferNextScript extends NextScript {
  getDynamicChunks(files: DocumentFiles) {
    const { dynamicImports, assetPrefix, isDevelopment, devOnlyCacheBusterQueryString } = this.context;

    return dedupe(dynamicImports).map((bundle: any) => {
      if (!bundle.file.endsWith('.js') || files.allFiles.includes(bundle.file)) return null;

      return (
        <script
          key={bundle.file}
          defer={!isDevelopment}
          nonce={this.props.nonce}
          crossOrigin={this.props.crossOrigin || process.env.__NEXT_CROSS_ORIGIN}
          src={`${assetPrefix}/_next/${encodeURI(bundle.file)}${devOnlyCacheBusterQueryString}`}
        />
      );
    });
  }

  getScripts(files: DocumentFiles) {
    const { assetPrefix, buildManifest, isDevelopment, devOnlyCacheBusterQueryString } = this.context;

    const normalScripts = files.allFiles.filter((file) => file.endsWith('.js'));
    const lowPriorityScripts = buildManifest.lowPriorityFiles?.filter((file) => file.endsWith('.js'));

    return [...normalScripts, ...lowPriorityScripts].map((file) => {
      return (
        <script
          key={file}
          defer={!isDevelopment}
          nonce={this.props.nonce}
          crossOrigin={this.props.crossOrigin || process.env.__NEXT_CROSS_ORIGIN}
          src={`${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`}
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
          <meta name="facebook-domain-verification" content="rno30s9g5wta48l6sz2osmjfgxi6dw" />
          <link href="https://fonts.googleapis.com/css2?family=Inter&display=optional" rel="stylesheet" />
          <Script
            id="partytown"
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
