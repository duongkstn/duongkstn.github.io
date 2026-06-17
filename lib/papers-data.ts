export interface PaperItem {
  id: string;
  title: string;
  conference: string;
  year: string;
  authors: string;
  link?: string;
  
}
export interface PapersData {
  name: string;
  title: string;
  papers: PaperItem[];
}

export const papersData: PapersData = {
  name: "Dao Nguyen Duong",
  title: "AI Engineer",

  papers: [
    {
      id: "p-2",
      title: "Retrieval-Guided Fine-tuning for Vietnamese Event Duration Question Answering",
      conference: "Proceedings of the 11th International Workshop on Vietnamese Language and Speech Processing",
      year: "2025",
      authors: "Dao, Duong Nguyen and Nguyen, Thanh Xuan",
      link: "https://aclanthology.org/2025.vlsp-1.37"
    },
    {
      id: "p-1",
      title: "An LSTM-based Approach for Overall Quality Prediction in HTTP Adaptive Streaming",
      conference: "IEEE INFOCOM 2019 - IEEE Conference on Computer Communications Workshops (INFOCOM WKSHPS)",
      year: "2019",
      authors: "Tran, Huyen T. T. and Nguyen, Duc V. and Nguyen, Duong D. and Ngoc, Nam Pham and Thang, Truong Cong",
      link: "https://ieeexplore.ieee.org/document/8845041"
    }
  ]
};

