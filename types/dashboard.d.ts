export namespace Dashboard {
  export interface Fields {
    image: string;
    logo: string;
    title: string;
    chennal_name: string;
    history: string;
  }

  export interface RootObject {
    recordId: string;
    modelIdentifier: string;
    fields: Fields;
  }
}
