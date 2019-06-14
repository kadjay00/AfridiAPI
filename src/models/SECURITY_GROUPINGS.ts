import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('SECURITY_GROUPINGS', {schema: 'dbo' } )
@Index('SECURITY_GROUPINGS_X', ['GROUP_NAME', 'USER_NAME'], {unique: true})
export class SECURITY_GROUPINGS {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 16,
        name: 'GROUP_NAME',
        })
    public GROUP_NAME: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 16,
        name: 'USER_NAME',
        })
    public USER_NAME: string;

    @Column('char', {
        nullable: true,
        name: 'SEC_PRINTPF_C',
        })
    public SEC_PRINTPF_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 15,
        name: 'ENSEIGNE_C',
        })
    public ENSEIGNE_C: string | null;

}
