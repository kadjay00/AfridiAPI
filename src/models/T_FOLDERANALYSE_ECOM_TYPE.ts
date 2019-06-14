import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_FOLDERANALYSE_ECOM_TYPE', {schema: 'dbo' } )
export class T_FOLDERANALYSE_ECOM_TYPE {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 8,
        name: 'FEC_FOLDERTYPE_C',
        })
    public FEC_FOLDERTYPE_C: string;

}
