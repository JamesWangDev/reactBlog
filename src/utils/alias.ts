import { resolve } from "path"

const r = (p: string) => resolve(__dirname, p)

export const alias: Record<string, string> = {
  "@types": r("../../@types"),
  "@components": r("../components/"),
  "@pages": r("../pages/"),
  "@utils": r("../utils/"),
  "@styles": r("../styles/"),
  "@hooks": r("../hooks/"),
  "@contexts": r("../contexts/"),
  "@services": r("../services/"),
  "@lib": r("../lib/")
}
