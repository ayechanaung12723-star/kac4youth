"use client";

import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

type CourseModalProps = {
  course: {
    title: string;
    icon: string;
    description: string;
    topics: string[];
  } | null;
  isOpen: boolean;
  onClose: () => void;
};

export default function CourseModal({ course, isOpen, onClose }: CourseModalProps) {
  if (!course) return null;

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-50" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-[#0f172a] p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title as="h3" className="text-2xl font-bold mb-4">
                  {course.title}
                </Dialog.Title>

                <p className="text-slate-400 mb-4">{course.description}</p>

                <ul className="list-disc list-inside space-y-1 text-slate-300 mb-6">
                  {course.topics.map((topic, i) => (
                    <li key={i}>{topic}</li>
                  ))}
                </ul>

                <div className="mt-4 text-right">
                  <button
                    type="button"
                    className="btn-primary"
                    onClick={onClose}
                  >
                    Close
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}