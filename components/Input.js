import { Field } from "formik";
export default function Input(props) {
  return (
    <div className="pb-5 pl-10 flex flex-col">
      <label className="text-sm font-medium" htmlFor={props.htmlFor}>
        {props.title}
      </label>
      <Field
        className="border border-slate-300 rounded w-48"
        id={props.id}
        name={props.name}
        placeholder={props.placeholder}
        type={props.type}
      />
    </div>
  );
}
