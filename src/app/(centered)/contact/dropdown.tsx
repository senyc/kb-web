import { Dispatch, SetStateAction } from "react";
import { FormDropdownOption } from "@annotations";
 
import OutsideClickHandler from "react-outside-click-handler";

interface FormDropdownProps {
  defaultValue?: string;
  options: FormDropdownOption[];
  selectedValue: any;
  setSelectedValue: Dispatch<SetStateAction<any>>;
  id: string;
}

export default function FormDropdown({ id, defaultValue = "", options, selectedValue, setSelectedValue }: FormDropdownProps) {
  const toggleOpen = () => {
    document.getElementById(id)?.removeAttribute('open');
  };
  const currentValueIndex = options.findIndex((val) => val.value == selectedValue) 
  const defaultValueIndex = options.findIndex((val) => val.value == defaultValue) 
  return (
    <>
      <OutsideClickHandler 
        onOutsideClick={toggleOpen}> 
        <details 
          id={id} 
          className="dropdown dropdown-bottom" 
        > 
          <summary
          role="button"
          className=" input input-bordered w-96 list-none pt-3 font-normal"
        >
          {selectedValue == "" ? options[defaultValueIndex].label : options[currentValueIndex != -1 ? currentValueIndex : defaultValueIndex].label}
        </summary>
        <ul className="menu dropdown-content dark:bg-dark-header bg-light-header mt-2 rounded-md shadow">
          {options.map(currentOption => {
            return (<li
              className={currentOption.hidden ? 'text-gray-400' : ''}
              key={"formitemdropdown-" + currentOption.label}
              onClick={() => {
                toggleOpen();
                setSelectedValue(currentOption.value);
              }}
            >
              <a>
                {currentOption.label}
              </a>
            </li>
            );
          })}
        </ul>
      </details>
      </OutsideClickHandler >
    </>
  );
}
