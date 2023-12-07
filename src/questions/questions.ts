export interface Question {
  name: string;
  img: string;
  type: QuestionTypeEnum;
}

export enum QuestionTypeEnum {
  HairProduct = 0,
  CyberCompany = 1,
}
const questions: Question[] = [
  {
    name: "Growplex",
    img: "growplex.png",
    type: QuestionTypeEnum.HairProduct,
  },
  {
    name: "Fortinet",
    img: "fortinet.png",
    type: QuestionTypeEnum.CyberCompany,
  },
  {
    name: "Zscaler",
    img: "zscaler.png",
    type: QuestionTypeEnum.CyberCompany,
  },
  {
    name: "Okta",
    img: "okta.png",
    type: QuestionTypeEnum.CyberCompany,
  },
  {
    name: "Proofpoint",
    img: "proofpoint.png",
    type: QuestionTypeEnum.CyberCompany,
  },
  {
    name: "Sophos",
    img: "sophos.png",
    type: QuestionTypeEnum.CyberCompany,
  },
  {
    name: "Trellix",
    img: "trellix.png",
    type: QuestionTypeEnum.CyberCompany,
  },
];
export default questions;
