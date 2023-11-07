import Swal from "sweetalert2";

export interface ErrorDialogProps {
    errors?: string[];
    detail?: string;
}

export function ErrorDialog({ errors, detail } : ErrorDialogProps) {
  if (!!errors && errors.length > 0) {
    Swal.fire({
      icon: 'error',
      title: 'Ocorreu um Erro!',
      html: errors.map(x => `<p>${x}</p>`).join(''),
      confirmButtonText: 'OK',
        customClass: {
          confirmButton: 'swalButton'
      }
    });

    return;
  }

  Swal.fire({
    icon: 'error',
    title: 'Ocorreu um Erro!',
    html: `<p>${detail}</p>`,
    confirmButtonText: 'OK',
      customClass: {
        confirmButton: 'swalButton'
    }
  });
}

export function ErrorGenericDialog() {
    Swal.fire({
        icon: 'error',
        title: 'Erro!',
        text: 'Ocorreu um erro no servidor',
        confirmButtonText: 'OK',
      });
}