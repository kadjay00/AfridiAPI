import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_IMOVEHEAD_RECON_DELAYED', {schema: 'dbo' } )
export class T_IMOVEHEAD_RECON_DELAYED {

    @Column('numeric', {
        nullable: false,
        primary: true,
        scale: 0,
        name: 'IHD_AJUSTEMENTID_N',
        })
    public IHD_AJUSTEMENTID_N: number;

    @Column('varchar', {
        nullable: false,
        length: 8,
        name: 'IHD_USERID_C',
        })
    public IHD_USERID_C: string;

    @Column('datetime', {
        nullable: true,
        name: 'IHD_EFFECT_DAT',
        })
    public IHD_EFFECT_DAT: Date | null;

    @Column('datetime', {
        nullable: false,
        name: 'IHD_CREATION_DAT',
        })
    public IHD_CREATION_DAT: Date;

}
