import fetch from 'node-fetch'

export const sendHeraRequest = async (method, path, pathPrefix, body) => {
  if (pathPrefix) {
    const pathParts = path.split('/')
    pathParts[2] = `${pathPrefix}~${pathParts[2]}`
    path = pathParts.join('/')
  }

  return (await fetch(`https://api.sbksapps.com${path}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-token': process.env.HERA_SECRET,
      'x-hera-method': method,
    },
    body: JSON.stringify(body),
  })).json()
}
