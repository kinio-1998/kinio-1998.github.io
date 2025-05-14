import { archiviements } from "../../obj/objArchievements";

export const ModalArchievements = () => {
  return (
    <div className="grid grid-cols-1  gap-4">
      <div className="mb-8">
        <div>
          <ul className="space-y-3 text-sm text-gray-200">
            {archiviements.es.map((arc, i) => (
              <li key={i} className="  border-green-500 list-disc ">
                <div className="col-span-4">
                  <h4 className="text-white font-semibold text-base  ">
                    {arc}
                  </h4>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
