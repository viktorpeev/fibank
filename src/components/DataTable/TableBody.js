import React from "react";

const TableBody = ({ characters, loading, error }) => {
  if (loading) {
    return (
      <tbody>
        <tr>
          <td colSpan="5" style={{ textAlign: "center" }}>
            Loading...
          </td>
        </tr>
      </tbody>
    );
  }

  if (error) {
    return (
      <tbody>
        <tr>
          <td colSpan="5" style={{ textAlign: "center", color: "red" }}>
            {error}
          </td>
        </tr>
      </tbody>
    );
  }

  return (
    <tbody>
      {characters.map((character) => (
        <tr key={character.name}>
          <td>{character.name}</td>
          <td>{character.mass}</td>
          <td>{character.height}</td>
          <td>{character.hair_color}</td>
          <td>{character.skin_color}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
