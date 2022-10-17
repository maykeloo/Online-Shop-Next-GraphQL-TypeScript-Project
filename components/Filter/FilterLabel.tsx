import { Disclosure } from "@headlessui/react";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/outline";

export const FilterLabel = () => {
  return (
    <>
      <div className="flex flex-col justify-start text-left gap-4">
        <Disclosure defaultOpen={true}>
          {({ open }) => (
            <div className="flex flex-col gap-2">
              <Disclosure.Button className="text-left items-center gap-2 flex justify-between">
                Kategoria
                {!open ? <PlusIcon width={16} /> : <MinusIcon width={16} />}
              </Disclosure.Button>
              <Disclosure.Panel>
                <div className="flex flex-col gap-2">
                  <label htmlFor="category-clothes" className="flex gap-2">
                    <input name="category" type="radio" id="category-clothes" />
                    <span className="text-gray-500">Ubrania</span>
                  </label>
                  <label htmlFor="category-electronic" className="flex gap-2">
                    <input name="category" type="radio" id="category-electronic"/>
                    <span className="text-gray-500">Electronika</span>
                  </label>
                </div>
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
        <Disclosure defaultOpen={true}>
          {({ open }) => (
            <div className="flex flex-col gap-2">
              <Disclosure.Button className="text-left items-center gap-2 flex justify-between">
                Stan
                {!open ? <PlusIcon width={16} /> : <MinusIcon width={16} />}
              </Disclosure.Button>
              <Disclosure.Panel>
                <div className="flex flex-col gap-2">
                  <label htmlFor="state-new" className="flex gap-2">
                    <input name="category" type="checkbox" id="state-new" />
                    <span className="text-gray-500">Nowy</span>
                  </label>
                  <label htmlFor="state-used" className="flex gap-2">
                    <input name="category" type="checkbox" id="state-used" />
                    <span className="text-gray-500">Uzywany</span>
                  </label>
                  <label htmlFor="state-shop" className="flex gap-2">
                    <input name="category" type="checkbox" id="state-shop" />
                    <span className="text-gray-500">Powystawowy</span>
                  </label>
                </div>
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
      </div>
    </>
  );
};
