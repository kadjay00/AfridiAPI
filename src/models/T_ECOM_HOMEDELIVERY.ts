import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_ECOM_HOMEDELIVERY', {schema: 'dbo' } )
export class T_ECOM_HOMEDELIVERY {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 10,
        name: 'EHD_HOMEDELIVERY_C',
        })
    public EHD_HOMEDELIVERY_C: string;

    @Column('varchar', {
        nullable: false,
        length: 35,
        name: 'EHD_DESCRIPTIONNL_C',
        })
    public EHD_DESCRIPTIONNL_C: string;

    @Column('varchar', {
        nullable: false,
        length: 35,
        name: 'EHD_DESCRIPTIONFR_C',
        })
    public EHD_DESCRIPTIONFR_C: string;

    @Column('varchar', {
        nullable: false,
        length: 3,
        name: 'EHD_CONDENSEDNL_C',
        })
    public EHD_CONDENSEDNL_C: string;

    @Column('varchar', {
        nullable: false,
        length: 3,
        name: 'EHD_CONDENSEDFR_C',
        })
    public EHD_CONDENSEDFR_C: string;

}
