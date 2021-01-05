// objek kambing
const kambing = {
  namaKambing: "kambing etawa",
  warnaKambing: "putih",
};

// objek sapi
let sapi = {
  namaSapi: "Sapi Limousin",
  warnaSapi: "coklat tua",
};

// Spread Operator (…)

// objek hewanBerkakiEmpat
const hewanBerkakiEmpat = { ...kambing, ...sapi };

// cetak objek hewanBerkakiEmpat
console.log(hewanBerkakiEmpat);
