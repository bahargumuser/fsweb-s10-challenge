import { NOT_EKLE, NOT_SIL } from "./actions";

const s10chLocalStorageKey = "s10ch";

const baslangicDegerleri = {
  notlar: [
    {
      id: "75g1IyB8JLehAr0Lr5v3p",
      date: "Fri Feb 03 2023 09:40:27 GMT+0300 (GMT+03:00)",
      body: "Bugün hava çok güzel!|En iyi arkadaşımın en iyi arkadaşı olduğumu öğrendim :)|Kedim iyileşti!",
    },
  ],
};

function localStorageStateYaz(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function localStorageStateOku(key) {
  return JSON.parse(localStorage.getItem(key));
}

function baslangicNotlariniGetir(key) {
  const eskiNotlar = localStorage.getItem(key);

  if (eskiNotlar) {
    return localStorageStateOku(key);
  } else {
    return baslangicDegerleri.notlar;
  }
}

const initialState = {
  notlar: baslangicNotlariniGetir(s10chLocalStorageKey),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case NOT_EKLE:
      const yeniNotlar = [...state.notlar, action.payload];
      localStorageStateYaz(s10chLocalStorageKey, yeniNotlar);
      return { ...state, notlar: yeniNotlar };
    case NOT_SIL:
      const notId = action.payload;
      const kalanNotlar = state.notlar.filter((not) => not.id !== notId);
      localStorageStateYaz(s10chLocalStorageKey, kalanNotlar);
      return { ...state, notlar: kalanNotlar };

    default:
      return state;
  }
};

export default reducer;
