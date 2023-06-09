export function getType(target: any) {
  return Object.prototype.toString.call(target).slice(8, -1);
}
