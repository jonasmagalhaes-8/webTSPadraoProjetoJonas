declare const iziToast: {
    success(opts: { title: string; message: string; position: string }): void;
    error(opts: { title: string; message: string; position: string }): void;
};

declare module '*.html?raw' {
    const content: string;
    export default content;
}
