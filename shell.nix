let
  nixpkgs = builtins.fetchTarball {
    name   = "nixos-22.05";
    url    = "https://github.com/NixOS/nixpkgs/archive/92fe622fdfe4.tar.gz";
    sha256 = "04mqwyarxxxksjh3ysgb6k3nirzzmqhsg07d344ssh2906604ii4";
  };

  pkgs = import nixpkgs { };

in
  pkgs.mkShell {
    buildInputs = [
      pkgs.nodejs
    ];
  }
