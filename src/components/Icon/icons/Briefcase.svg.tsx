export const Briefcase = ({...rest}) => (
  <svg
    width={rest.width ?? '16'}
    height={rest.height ?? '16'}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      opacity="0.4"
      d="M10 9H16V13.5C16 14.3 15.3 15 14.5 15H1.5C0.7 15 0 14.3 0 13.5V9H6V10.5C6 10.6326 6.05268 10.7598 6.14645 10.8536C6.24021 10.9473 6.36739 11 6.5 11H9.5C9.63261 11 9.75979 10.9473 9.85355 10.8536C9.94732 10.7598 10 10.6326 10 10.5V9Z"
      fill="#213F7D"
    />
    <path
      d="M14.5 4H12V2.5C12 1.7 11.3 1 10.5 1H5.5C4.7 1 4 1.7 4 2.5V4H1.5C0.7 4 0 4.7 0 5.5V8H16V5.5C16 4.7 15.3 4 14.5 4ZM10 4H6V3H10V4Z"
      fill="#213F7D"
    />
  </svg>
);
