import { Label, Select } from "flowbite-react";

export default function CardFilter() {
  return (
    <div className="p-5 bg-pic-50 rounded-lg shadow-md">
      <h3 className="text-lg font-poppins font-semibold text-brown-900 mb-3">
        Filter Data Chart
      </h3>
      <div className="flex justify-start gap-3 items-center">
        <div className="w-full max-w-lg" id="month">
          <div className="mb-2 block">
            <Label htmlFor="month" value="Bulan" />
          </div>
          <Select id="month" required>
            <option value="01">Januari</option>
            <option value="02">Februari</option>
            <option value="03">Maret</option>
            <option value="04">April</option>
            <option value="05">Mei</option>
            <option value="06">Juni</option>
            <option value="07">Juli</option>
            <option value="08">Agustus</option>
            <option value="09">September</option>
            <option value="10">Oktober</option>
            <option value="11">November</option>
            <option value="12">Desember</option>
          </Select>
        </div>
        <div className="w-full max-w-lg" id="year">
          <div className="mb-2 block">
            <Label htmlFor="year" value="Tahun" />
          </div>
          <Select id="year" required>
            <option>2019</option>
            <option>2020</option>
            <option>2021</option>
            <option>2022</option>
            <option>2023</option>
          </Select>
        </div>
      </div>
    </div>
  );
}
