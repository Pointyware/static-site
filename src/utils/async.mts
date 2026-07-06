
export async function sleep(interval: number): Promise<void> {
  return new Promise((resolve)=>setInterval(resolve,interval))
}
