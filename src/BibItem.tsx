interface BibItem {
  id: number;
  zone: string;
  createdDate: string;
  updatedDate: string;
  deleted: boolean;
  deletedDate: string | null;
  language: string;
  subject: string;
  subjectPlace: string;
  subjectTime: string;
  subjectWork: string;
  isbnIssn: string;
  author: string;
  placeOfPublication: string;
  location: string;
  title: string;
  udc: string;
  publisher: string;
  kind: string;
  domain: string;
  formOfWork: string;
  genre: string;
  timePeriodOfCreation: string;
  audienceGroup: string;
  demographicGroup: string;
  nationalBibliographyNumber: string;
  publicationYear: string;
  languageOfOriginal: string;
}