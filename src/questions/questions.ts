export interface Question {
  name: string;
  img: string;
  type: QuestionTypeEnum;
  description: string;
}

export enum QuestionTypeEnum {
  HairProduct = 0,
  CyberCompany = 1,
}

const questions: Question[] = [
  {
    name: "Growplex",
    img: "growplex.jpeg",
    type: QuestionTypeEnum.HairProduct,
    description: 'Hair growth serum enriched with vitamins and natural extracts for healthier and stronger hair.'
  },
  {
    name: "Mielle",
    img: "mielle.jpeg",
    type: QuestionTypeEnum.HairProduct,
    description: 'Organic hair care products formulated with natural ingredients for all hair types.'
  },
  {
    name: "Fortinet",
    img: "fortinet.png",
    type: QuestionTypeEnum.CyberCompany,
    description: 'Global cybersecurity company specializing in network security, firewall solutions, and threat intelligence.'
  },
  {
    name: "Zscaler",
    img: "zscaler.png",
    type: QuestionTypeEnum.CyberCompany,
    description: 'Cloud security platform providing internet security, web security, and firewall services.'
  },
  {
    name: "Okta",
    img: "okta.png",
    type: QuestionTypeEnum.CyberCompany,
    description: 'Identity and access management company offering secure and seamless user authentication solutions.'
  },
  {
    name: "Proofpoint",
    img: "proofpoint.png",
    type: QuestionTypeEnum.CyberCompany,
    description: 'Cybersecurity company that provides software as a service and products for email security, identity threat defense, data loss prevention, electronic discovery, and email archiving.'
  },
  {
    name: "Sophos",
    img: "sophos.png",
    type: QuestionTypeEnum.CyberCompany,
    description: 'Security software and hardware company providing endpoint protection, encryption, and network security solutions.'
  },
  {
    name: "Trellix",
    img: "trellix.png",
    type: QuestionTypeEnum.CyberCompany,
    description: 'Innovative cybersecurity firm focused on threat intelligence, risk management, and security consulting.'
  },
  {
    name: "Curls Unleashed",
    img: "curls_unleashed.jpeg",
    type: QuestionTypeEnum.HairProduct,
    description: 'A line of natural hair care products designed to define and enhance curly hair textures.'
  },
  {
    name: "Vonage",
    img: "vonage.png",
    type: QuestionTypeEnum.CyberCompany,
    description: 'Communication API platform offering SMS, voice, phone verifications, and other communication solutions.'
  },
  {
    name: "Aveda",
    img: "aveda.png",
    type: QuestionTypeEnum.HairProduct,
    description: 'High-performance hair care products with a focus on natural and sustainable ingredients.'
  },
  {
    name: "CrowdStrike",
    img: "crowdstrike.png",
    type: QuestionTypeEnum.CyberCompany,
    description: 'Cybersecurity company providing cloud-delivered endpoint and workload protection.'
  },
];

export default questions;
