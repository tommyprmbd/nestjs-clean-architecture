export class StringHelper {
    public static toTitleCase(name: string): string {
        return name.split(" ").map((l: string) => l[0].toUpperCase() + l.substr(1)).join(" ")
    }
}