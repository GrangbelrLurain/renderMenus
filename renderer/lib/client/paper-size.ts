export const unit = {
  inch: "inch",
  mm: "mm",
};

const { inch, mm } = unit;

const papers = {
  Letter: {
    width: 8.5,
    height: 11,
    unit: inch,
  },
  Legal: {
    width: 8.5,
    height: 14,
    unit: inch,
  },
  A3: {
    width: 297,
    height: 420,
    unit: mm,
  },
  A4: {
    width: 210,
    height: 297,
    unit: mm,
  },
  A5: {
    width: 148,
    height: 210,
    unit: mm,
  },
  B4: {
    width: 257,
    height: 364,
    unit: mm,
  },
  B5: {
    width: 182,
    height: 257,
    unit: mm,
  },
};

export default papers;
