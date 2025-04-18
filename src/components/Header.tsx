import { Menubar } from "primereact/menubar";

export default function Header() {


  return (
    <header>
      {/* <div className="section-container top-0 left-0 right-0 bg-white shadow-md z-50">
        <h1 className="text-2xl">rat (kubota) s room</h1>
      </div> */}
      <Menubar
        model={[
          {
            label: "Home",
            icon: "pi pi-fw pi-home",
            command: () => {
              // Navigate to home
              window.location.href = "/";
              // window.open("https://ratkubota.github.io", "_blank");
            }
          },
          {
            label: "File",
            items: [
              {
                label: "New",
                icon: "pi pi-fw pi-plus",
              },
              {
                label: "Open",
                icon: "pi pi-fw pi-download",
              },
            ],
          },
          {
            label: "Edit",
            items: [
              {
                label: "Undo",
                icon: "pi pi-fw pi-refresh",
              },
            ],
          },
        ]}
      />
      
    </header>
  )
}