import { TextField, Tabs, Tab } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

const Header = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <header className="relative bg-linear-to-b from-green-600 to-green-700 min-h-[200px] flex flex-col items-center justify-center px-4">
      {/* Banner Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-80"
        style={{
          backgroundImage: "url('/homeImage.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <img
        src="/titleHome.png"
        alt="Rick and Morty"
        className="w-[500px] max-w-full mb-8"
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl flex flex-col items-center gap-6 py-8">
        {/* Logo/Title */}
        <div className="text-center">
          <h1 className="text-5xl font-bold text-green-300 drop-shadow-lg">
            Rick and Morty
          </h1>
        </div>

        {/* Search Bar - Material UI */}
        <div className="w-full max-w-lg">
          <TextField
            fullWidth
            placeholder="Buscar personaje por nombre"
            variant="outlined"
            InputProps={{
              startAdornment: <SearchIcon className="mr-2 text-gray-500" />,
              className: "bg-white/90 backdrop-blur-sm rounded-lg",
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  border: "none",
                },
                "&:hover fieldset": {
                  border: "none",
                },
                "&.Mui-focused fieldset": {
                  border: "2px solid #4ade80",
                },
              },
            }}
          />
        </div>
      </div>

      {/* Tabs - Material UI */}
      <div className="absolute bottom-0 left-20">
        <Tabs
          value={activeTab}
          onChange={(e, newValue) => setActiveTab(newValue)}
          sx={{
            "& .MuiTab-root": {
              color: "white",
              textTransform: "none",
              fontWeight: 500,
              minHeight: "40px",
            },
            "& .Mui-selected": {
              backgroundColor: "#22c55e",
              borderRadius: "8px 8px 0 0",
            },
            "& .MuiTabs-indicator": {
              display: "none",
            },
          }}
        >
          <Tab label="Todos" className="px-6" />
          <Tab label="Favoritos" className="px-6" />
        </Tabs>
      </div>
    </header>
  );
};

export default Header;
