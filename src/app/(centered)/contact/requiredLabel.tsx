interface RequiredLabelProps {
  labelText: string;
  htmlFor: string;

}
export default function RequiredLabel({labelText, htmlFor}: RequiredLabelProps) {
  return (
      <div className="label">
        <label className="label-text mt-2 flex flex-row gap-1" htmlFor={htmlFor}><p>{labelText}</p> <p className="text-md pb-1 text-red-400"> *</p></label>
      </div>
  )
}
