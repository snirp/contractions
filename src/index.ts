import contractionsMap from "./maps/contractions";
import slangMap from "./maps/slang";

interface Options {
  convertSlang?: boolean;
  convertContractions?: boolean;
  customMap?: Record<string, string>;
}

const defaultOptions = {
  convertSlang: true,
  convertContractions: true,
  customMap: {},
};

const decontract = (
  str: string,
  { customMap, convertContractions, convertSlang }: Options = defaultOptions
): string => {
  const map = {
    ...(convertContractions && contractionsMap),
    ...(convertSlang && slangMap),
    ...customMap,
  };
  type Key = keyof typeof map;
  const re = new RegExp("\\b(?:" + Object.keys(map).join("|") + ")\\b", "gi");
  return str.replace(re, (matched) => map[matched.toLowerCase() as Key] || "");
};

export default decontract;
