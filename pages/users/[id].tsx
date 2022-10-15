import { useRouter } from "next/router";

interface Props {

}

const Users = ({}: Props) => {

const { query } = useRouter()
  return (
    <div>Siema, jestem użytkownikiem {query.id}.</div>
  );
}

export default Users;