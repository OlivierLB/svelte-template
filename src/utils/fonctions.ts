import colors from "../styles/variables/colors.scss"
export function getColor(name: string): string {
    return colors.substr(9 + colors.search(name), 7)
}