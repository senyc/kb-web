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
          {selectedValue == "" ? options[options.findIndex((val) => val.value == defaultValue)].label : options[options.findIndex((val) => val.value == selectedValue)].label}
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
