const gateway = "https://swarm-gateways.net/bzz:/"

export const publish = (content: any) =>
  fetch(gateway, {
    method: "POST",
    body: JSON.stringify(content),
  }).then(_ => _.text())

export const getContent = async (hash: string) =>
  fetch(gateway + hash).then(_ => _.json())
