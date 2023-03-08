import InfoSelect from "./info-select";
import InfoTable from "./info-table";

const Info = () => (
  <article>
    <h1>옵션</h1>
    <h2>사이즈 선택</h2>
    <InfoSelect></InfoSelect>
    <h2>데이터 입력</h2>
    <InfoTable></InfoTable>
  </article>
);

export default Info;