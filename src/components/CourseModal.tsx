"use client";

import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

interface CourseModalProps {
  course: {
    title: string;
    icon: string;
    description: string;
    topics: string[];
  };
  isOpen: boolean;
  onClose: () => void;
}

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
                {/* Title */}
                <Dialog.Title as="h3" className="text-2xl font-bold mb-4">
                  {course.title}
                </Dialog.Title>

                {/* Description */}
                <p className="text-slate-300 mb-4">{course.description}</p>

                {/* Topics */}
                <ul className="list-disc list-inside text-slate-200 space-y-2 mb-6">
                  {course.topics.map((topic, idx) => (
                    <li key={idx}>{topic}</li>
                  ))}
                </ul>

                {/* Close Button */}
                <div className="flex justify-end">
                  <button
                    onClick={onClose}
                    className="btn-primary px-6 py-2"
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