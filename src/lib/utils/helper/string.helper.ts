export class StringHelper {
  public static toTitleCase(name: string): string {
    if (name.length == 0) return null;
    return name
      .split(' ')
      .map((l: string) => l[0].toUpperCase() + l.substr(1))
      .join(' ');
  }
}
