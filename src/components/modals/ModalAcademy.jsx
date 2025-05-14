import { certifications } from "../../obj/objCertifications";
import { techIcons } from "../../obj/objIcons";

export const ModalAcademy = ({ traducciones }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-12 gap-2">
      <div className="sm:col-span-5 sm:col-start-2 sm:row-start-2 mr-3">
        <div>
          <h3 className="text-xl font-semibold text-green-400 mb-2">
            🎓 Educación
          </h3>
          <div className="bg-green-950/30 p-4 rounded-lg border-l-4 border-green-500">
            <h4 className="font-bold">Universidad Autónoma de Sinaloa</h4>
            <p className="text-sm text-gray-300">
              2016 - 2021 · Licenciatura en Informática
            </p>
            <p className="text-sm mt-1 text-gray-200">
              <strong>Promedio:</strong> 8.3/10
            </p>
            <p className="text-sm text-gray-200">
              <strong>Proyecto destacado:</strong> Sistema de pagos similar a
              PayPal en PHP y MySQL.
            </p>
          </div>
        </div>
        <div className="sm:col-span-5 sm:col-start-2 sm:row-start-4 mt-10">
          <div>
            <h3 className="text-green-500 text-xl font-semibold border-b border-green-500 pb-1 mb-4">
              🌐 Idiomas
            </h3>
            <ul className="list-disc list-inside pb-20">
              <li>Español - Nativo</li>
              <li>Inglés - B2</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="sm:col-span-5 sm:col-start-7 sm:row-start-2 ">
        <div className="mb-8">
          <div>
            <h3 className="text-xl font-semibold text-green-400 mb-2">
              📜 Certificaciones
            </h3>
            <ul className="space-y-3 text-sm text-gray-200">
              {certifications.map((cert) => (
                <li
                  key={cert.id}
                  className="border-l-4 border-green-500 pl-2 rounded-lg"
                >
                  <div className="grid grid-cols-5 gap-4">
                    <div className="col-span-4">
                      <h4 className="text-green-600 font-semibold">
                        {cert.institution}
                      </h4>
                      <p className="text-white text-sm">{cert.title}</p>
                      <p className="text-gray-400 text-xs">{cert.date}</p>
                    </div>
                    <div className="col-span-1 flex items-center justify-end">
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 hover:text-green-300"
                        title="Ver certificado"
                      >
                        <i className="text-xl flex ">
                          {techIcons.getIconByName("File")}
                        </i>
                      </a>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
