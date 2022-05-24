import ConfirmationCard from "@components/common/confirmation-card";
import { useUI } from "@contexts/ui.context";
import { useDeleteOrderMutation } from "@graphql/orders.graphql";

const OrderDeleteView = () => {
  const [deleteOrder, { loading }] = useDeleteOrderMutation();

  const { closeModal, modalData } = useUI();
  async function handleDelete() {
    await deleteOrder({
      variables: { id: modalData },
    });
    return closeModal();
  }
  return (
    <ConfirmationCard
      deleteBtnLoading={loading}
      onCancel={closeModal}
      onDelete={handleDelete}
    />
  );
};

export default OrderDeleteView;
