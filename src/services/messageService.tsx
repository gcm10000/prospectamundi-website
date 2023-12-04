import { Button } from "@/components/Button";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export const messageService = {
    success: async (message: string) => {
        await MySwal.fire({
            title: <strong>Sucesso!</strong>,
            html: <p>{ message }</p>,
            buttonsStyling: false,
            showCancelButton: false,
            confirmButtonText: <Button>Entendido</Button>,
            icon: 'success'
          })
     },
    error: async (message: string) => {
        await MySwal.fire({
            title: <strong>Erro</strong>,
            html: <p>{ message }</p>,
            buttonsStyling: false,
            showCancelButton: false,
            confirmButtonText: <Button>Entendido</Button>,
            icon: 'error'
          });
    },
    errors: async (messages: string[]) => {
        await Swal.fire({
            title: '<strong>Erro</strong>',
            html: messages.map(message => `<p>${message}</p>`).join(''),
            buttonsStyling: false,
            showCancelButton: false,
            confirmButtonText: 'Entendido',
            icon: 'error'
          });
    }
}

