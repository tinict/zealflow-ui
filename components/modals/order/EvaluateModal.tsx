import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import TextArea from "antd/es/input/TextArea";

import ButtonConfig from "@/components/Button";

export default function EvaluateModal({}: any) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [rating, setRating] = useState(0);

  const handleRating = (rate: number) => {
    setRating(rate);
  };

  const handleCancel = () => {};

  const handleOK = () => {};

  return (
    <div className="flex flex-col gap-2">
      <ButtonConfig onPress={onOpen}>Đánh giá</ButtonConfig>
      <Modal
        className="rounded-none"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Đánh giá chủ shop
              </ModalHeader>
              <ModalBody>
                <h1 className="font-medium text-center">
                  Để lại đánh giá của bạn
                </h1>
                <div className="flex flex-col items-center">
                  <p className="text-center">
                    <small>Nhấp vào các ngôi sao để đánh giá chúng tôi</small>
                  </p>
                  {/* <Rating onClick={handleRating} initialValue={rating} /> */}
                </div>
                <div className="flex gap-4 justify-center items-center">
                  <img
                    alt="img"
                    className="w-[40px] h-[40px] rounded-lg border-2 border-red_main border-dashed cursor-pointer mb-2"
                    src="https://t4.ftcdn.net/jpg/04/81/13/43/240_F_481134373_0W4kg2yKeBRHNEklk4F9UXtGHdub3tYk.jpg"
                  />
                  <img
                    alt="video"
                    className="w-[40px] h-[40px] rounded-lg border-2 border-red_main border-dashed cursor-pointer mb-2"
                    src="https://i.pinimg.com/564x/39/98/b9/3998b9928f707aa0c778a24c6360814b.jpg"
                  />
                </div>
                <div>
                  <label className="text-[12px]" htmlFor="evaluate">
                    Viết đánh giá
                  </label>
                  <TextArea
                    className="focus:border-red_main hover:border-red_main mt-2 text-[14px]"
                    id="evaluate"
                    placeholder="Nhập đánh giá của bạn..."
                  />
                </div>
              </ModalBody>
              <ModalFooter>
                <ButtonConfig bordered onClick={handleCancel} onPress={onClose}>
                  Hủy
                </ButtonConfig>
                <ButtonConfig onClick={handleOK} onPress={onClose}>
                  Đánh giá
                </ButtonConfig>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
