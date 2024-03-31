# rahlwes.eu

## Newsletter

Subscriptions are handled by a self-hosted instance of [listmonk](https://listmonk.app), available on [lists.rahlwes.eu](https://lists.rahlwes.eu/).

Outgoing smtp is done via [Scaleway TEM](https://www.scaleway.com/en/docs/managed-services/transactional-email/), but we're mostly not sending transactional email - this might be something we need to change.

## CMS

Some contents can be managed via [TinaCMS](https://tina.io), available via [next.rahlwes.eu/admin](https://next.rahlwes.eu/admin)

## Translations

Static content can be managed via Github, just edit the [english](/src/locales/en.json) / [german](/src/locales/de.json) translations respectively.

## Analytics

TBD. Perhaps self-hosted plausible?

## Deployments

All pages are automatically deployed to Cloudflare pages and thus globally served on the edge.

Each pushed commit triggers a build. Pull-Request preview-deployments are enabled. For preview deployments, the default locale is `/de`.
