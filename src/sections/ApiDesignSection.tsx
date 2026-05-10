import { motion } from 'framer-motion';
import { ApiEndpointCard } from '../components/ApiEndpointCard';
import { Terminal } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function ApiDesignSection() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <section 
      id="api-design" 
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div className={isRTL ? 'text-right' : 'text-left'}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Terminal className="w-6 h-6 text-primary" />
              </div>
              <div className={`h-1 flex-1 bg-gradient-to-r ${isRTL ? 'from-transparent to-primary' : 'from-primary to-transparent'} rounded-full max-w-[100px]`} />
            </div>
            <h2 className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
              {t('apiDesign.title').split(' ')[0]}{' '}
              <span className="text-muted-foreground font-light">
                {t('apiDesign.title').split(' ').slice(1).join(' ')}
              </span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-xl font-light">
              {t('apiDesign.subtitle')}
            </p>
          </div>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {['auth-login', 'products-list', 'orders-create', 'users-update'].map((endpointId, index) => {
            const endpoint = {
              id: endpointId,
              method: (
                endpointId === 'auth-login' ? 'POST' :
                endpointId === 'products-list' ? 'GET' :
                endpointId === 'orders-create' ? 'POST' : 'PUT'
              ) as 'GET' | 'POST' | 'PUT' | 'DELETE',
              path: 
                endpointId === 'auth-login' ? '/api/v1/auth/login' :
                endpointId === 'products-list' ? '/api/v1/products' :
                endpointId === 'orders-create' ? '/api/v1/orders' : '/api/v1/users/:id',
              title: t(`apiDesign.endpoints.${endpointId}.title`),
              description: t(`apiDesign.endpoints.${endpointId}.description`),
              request: t(`apiDesign.endpoints.${endpointId}.request`),
              response: t(`apiDesign.endpoints.${endpointId}.response`),
              version: 'v1.0'
            };
            return (
              <motion.div
                key={endpointId}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              >
                <ApiEndpointCard endpoint={endpoint} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}