import { format, parseISO } from "date-fns";
import ja from "date-fns/locale/ja";
import React from "react";

const ConvertDate = ({ dateIso }: { dateIso: string }) => {
  const dateJa = format(parseISO(dateIso), "yyyy年MM月dd日", { locale: ja });
  return <time dateTime={dateIso}>{dateJa}</time>;
};

export default ConvertDate;
