export interface IResult {
    id: number;
    result_metadata: string;
    topics: string;
    text:string;
    enriched_text :string;
    extracted_metadata :string;
    title:string;
    index:number;
    source:string;
    type:string;
}
