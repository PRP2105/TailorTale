import React from 'react';
import { GOOGLE_FORM_SURVEY_URL } from '../data/constants';
import { Button } from '../components/common/Button';
import { ClipboardList, ExternalLink } from 'lucide-react';

export const SurveyStrip: React.FC = () => {
  return (
    <section className="bg-yellow/20 border-y border-yellow/60 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-yellow text-navy flex items-center justify-center flex-shrink-0 shadow-xs">
            <ClipboardList className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-serif font-bold text-xl sm:text-2xl text-navy">
              Help us understand how you choose books
            </h3>
            <p className="text-sm text-navy-soft mt-0.5">
              Are you an Indian college student? Take our 2-minute anonymous survey to shape future features.
            </p>
          </div>
        </div>

        <div className="flex-shrink-0">
          <Button
            asAnchor
            href={GOOGLE_FORM_SURVEY_URL}
            target="_blank"
            rel="noopener noreferrer"
            variant="navy"
            size="md"
            icon={<ExternalLink className="w-4 h-4" />}
          >
            Take the 2-min survey
          </Button>
        </div>
      </div>
    </section>
  );
};
