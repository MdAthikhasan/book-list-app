import { MdDelete } from "react-icons/md";
export default function BookRow({ book ,deleteHandler}) {
  const { aother, title, isbn, pubYear } = book;
 
  return (
    <tr>
      <td>{isbn}</td>
      <td>{title}</td>
      <td>{aother}</td>
      <td>{pubYear}</td>
      <td onClick={() => deleteHandler(isbn)}>{<MdDelete color="red" />}</td>
    </tr>
  );
}


 