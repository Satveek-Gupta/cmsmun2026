import Image from "next/image";

const committees = [
  {
    name: "United Nations General Assembly (DISEC)",
    chairperson: {
      name: "Gouri Lavania",
      title: "Chairperson",
      image: "/eb/UNGA/Gouri_Lavania.jpg",
    },
    viceChairperson: {
      name: "Urvashi Singh",
      title: "Vice Chairperson",
      image: "/eb/UNGA/Urvashi_Singh.png",
    },
  },
  {
    name: "United Nations Security Council",
    chairperson: {
      name: "Domil Antony Johnson",
      title: "Chairperson",
      image: "/eb/UNSC/Domil_Antony.jpeg",
    },
    viceChairperson: {
      name: "Khyati Naudiyal",
      title: "Vice Chairperson",
      image: "/eb/UNSC/Khyati_Naudiyal.jpg",
    },
  },
  {
    name: "Reunión de Emergencia del Consejo de Asesores, República del Perú",
    chairperson: {
      name: "Sarthak Singh",
      title: "President",
      image: "/eb/CCC/Sarthak_Singh.JPG",
    },
    viceChairperson: {
      name: "Vansh Yadav",
      title: "Chief National Security Advisor",
      image: "/eb/CCC/Vansh_Yadav.jpeg",
    },
  },
  {
    name: "INTERNATIONAL ATOMIC ENERGY AGENCY",
    chairperson: {
      name: "Bhumika Pandey",
      title: "Chairperson",
      image: "/eb/IAEA/Bhumika_Pandey.jpeg",
    },
    viceChairperson: {
      name: "Ishita Huria",
      title: "Vice Chairperson",
      image: "/eb/IAEA/Ishita_Huria.jpeg",
    },
  },
  {
    name: "Committee on the Peaceful Uses of Outer Space",
    chairperson: {
      name: "Mukunda Nand Dwivedi",
      title: "Director",
      image: "/eb/COPUOS/Mukunda_Nand_Dwivedi.jpeg",
    },
    viceChairperson: {
      name: "NK Devansh Tiwari",
      title: "Deputy Director",
      image: "/eb/COPUOS/NK_Devansh.jpeg",
    },
  },
  {
    name: "Organisation of American States",
    chairperson: {
      name: "Shresth Bindal",
      title: "Secretary General",
      image: "/eb/OAS/Shreshth_Bindal.png",
    },
    viceChairperson: {
      name: "Shivank Shukla",
      title: "Assistant Secretary General",
      image: "/eb/OAS/Shivank_Shukla.jpg",
    },
  },
  {
    name: "U.S. House Committee on Oversight and Government Reform 2013",
    chairperson: {
      name: "Sankalp Chauhan",
      title: "Chairperson",
      image: "/eb/US_HOUSE/Sankalp_Chauhan.JPEG",
    },
    viceChairperson: {
      name: "Rania Adil",
      title: "Vice Chairperson",
      image: "/eb/US_HOUSE/Rania_Adil.jpg",
    },
  },
  {
    name: "LOWER HOUSE OF PARLIAMENT OF INDIA",
    chairperson: {
      name: "Yashab Abbas",
      title: "Speaker",
      image: "/eb/LS/Yashab_Abbas.jpeg",
    },
    viceChairperson: {
      name: "Sashreek Pandey",
      title: "Deputy Speaker",
      image: "/eb/LS/Sashreek_Pandey.jpeg",
    },
    coDeputySpeaker: {
      name: "Chirag Singh",
      title: "Co-Deputy Speaker",
      image: "/eb/LS/Chirag_Singh.jpeg",
    },
  },
  {
    name: "International Court of Justice",
    chairperson: {
      name: "Aditya Kumar Upadhyay",
      title: "President",
      image: "/eb/ICJ/Aditya_Kumar_Upadhyay.jpeg",
    },
    viceChairperson: {
      name: "Trisha Verma",
      title: "Vice President",
      image: "/eb/ICJ/Trisha_Verma.jpeg",
    },
  },
  {
    name: "THE INTERNATIONAL PRESS",
    chairperson: {
      name: "Vinamra Koolwal",
      title: "Head of Reporting",
      image: "/eb/IP/Vinamra_Koolwal.jpeg",
    },
    viceChairperson: {
      name: "Luke Jason Das",
      title: "Head of Photography",
      image: "/eb/IP/Luke_Jason_Das.jpeg",
    },
  },
];

export default function ExecutiveBoardPage() {
  return (
    <section className="section bg-navy-light/70">
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <header className="mb-8">
          <h1 className="mt-2 text-2xl font-semibold uppercase tracking-[0.25em] text-slate-50 md:text-3xl">
            Executive Board
          </h1>
        </header>

        <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
          {committees.map((committee) => (
            <div
              key={committee.name}
              className="rounded-xl border border-white/10 bg-slate-900/40 p-6 shadow-lg shadow-slate-900/70"
            >
              <h2 className="text-[12px] font-semibold uppercase tracking-[0.24em] text-cyan-200">
                {committee.name}
              </h2>

              <div className="mt-5 space-y-4 border-t border-white/10 pt-4">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-cyan-300">
                    {committee.chairperson.title}
                  </p>
                  <div className="mt-2 flex items-center gap-3">
                    <div className="relative h-[100px] w-[100px] overflow-hidden rounded-full border border-cyan-300/70">
                      <Image
                        src={committee.chairperson.image}
                        alt={`${committee.chairperson.name} - ${committee.chairperson.title}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-xl font-semibold text-slate-50">
                        {committee.chairperson.name}
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-cyan-300">
                    {committee.viceChairperson.title}
                  </p>
                  <div className="mt-2 flex items-center gap-3">
                    <div className="relative h-[100px] w-[100px] overflow-hidden rounded-full border border-cyan-300/70">
                      <Image
                        src={committee.viceChairperson.image}
                        alt={`${committee.viceChairperson.name} - ${committee.viceChairperson.title}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-xl font-semibold text-slate-50">
                        {committee.viceChairperson.name}
                      </p>
                    </div>
                  </div>
                </div>
                {committee.coDeputySpeaker && (
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-cyan-300">
                      {committee.coDeputySpeaker.title}
                    </p>
                    <div className="mt-2 flex items-center gap-3">
                      <div className="relative h-[100px] w-[100px] overflow-hidden rounded-full border border-cyan-300/70">
                        <Image
                          src={committee.coDeputySpeaker?.image}
                          alt={`${committee.coDeputySpeaker?.name} - ${committee.coDeputySpeaker?.title}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-xl font-semibold text-slate-50">
                          {committee.coDeputySpeaker?.name}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

