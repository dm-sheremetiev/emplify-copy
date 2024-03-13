const timeouts: {
  [p: string]: {
    reject: (str: string) => void
    timeoutId: NodeJS.Timeout
  }
} = {}

export const sleep = (ms: number, type: string): Promise<any> => {
  try {
    return new Promise((resolve, reject) => {
      if (timeouts[type]?.timeoutId && timeouts[type]?.reject) {
        clearTimeout(timeouts[type]?.timeoutId)
        timeouts[type]?.reject('Debounced')
        timeouts[type] = undefined
      }
      timeouts[type] = {
        timeoutId: setTimeout(resolve, ms),
        reject: reject
      }
    })
  } catch (e) {
    // do nothing
    console.log(e)
  }
}
